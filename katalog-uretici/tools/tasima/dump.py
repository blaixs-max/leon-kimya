# Sayfa sayfa, stil bilgili metin dökümü (pdfplumber). Kullanım: dump.py pdf sayfa[,sayfa..]
import sys, pdfplumber, collections
def hexc(c):
    if not c: return '-'
    if isinstance(c,(list,tuple)):
        if len(c)==3: return '#%02X%02X%02X'%tuple(int(round(v*255)) for v in c)
        if len(c)==1: g=int(round(c[0]*255)); return '#%02X%02X%02X'%(g,g,g)
        if len(c)==4:
            C,M,Y,K=c; return '#%02X%02X%02X'%tuple(int(round(255*(1-v)*(1-K))) for v in (C,M,Y))
    return str(c)
pdf=pdfplumber.open(sys.argv[1])
pages=[int(x) for x in sys.argv[2].split(',')]
for pn in pages:
    p=pdf.pages[pn-1]
    ws=p.extract_words(x_tolerance=1.5,y_tolerance=2,keep_blank_chars=False,use_text_flow=False,extra_attrs=['fontname','size','non_stroking_color'])
    # satırlara grupla: aynı top (±1.5) + aynı stil + yakın x
    lines=[]
    for w in sorted(ws,key=lambda w:(round(w['top']),w['x0'])):
        st=(w['fontname'].split('+')[-1].replace('Arial','A').replace('-BoldMT','B').replace('MT',''), round(w['size'],1), hexc(w['non_stroking_color']))
        if lines and abs(lines[-1]['top']-w['top'])<1.6 and lines[-1]['st']==st and w['x0']-lines[-1]['x1']<14:
            L=lines[-1]; L['t']+=' '+w['text']; L['x1']=w['x1']
        else:
            lines.append({'top':w['top'],'x0':w['x0'],'x1':w['x1'],'st':st,'t':w['text']})
    print(f'==== p{pn} ({len(lines)} satır)')
    for L in lines:
        f,s,c=L['st']
        print(f"{L['top']:6.1f} {L['x0']:6.1f} {s:4} {f[:10]:10} {c} | {L['t']}")
