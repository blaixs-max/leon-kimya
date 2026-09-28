import json, sys
def sig(D):
    out=[]
    out.append(('why',len(D['why']['items'])))
    out.append(('std',[len(s.get('table',{}).get('rows',[])) for s in D['standards']['sections']]))
    for c in D['parts'][0]['categories']:
        out.append(('cat', len(c['items'])))
        for f in c['families']:
            out.append((f['page'],len(f['paras']),len(f['uses']),len(f['areas']),len(f['products']),len(f.get('gallery',[])), bool(f.get('img')),
                        [(len(pp['products']),[len(p['specs']) for p in pp['products']],len(pp.get('features',[]))) for pp in f['productPages']]))
    out.append(('colors', len(D['parts'][0]['colorChart']['swatches'])))
    for s in D['parts'][1]['systems']:
        out.append(('sys',len(s['paras']),len(s.get('areas',[])),len(s['features']['features']),len(s['features']['paras']),len(s['features']['gallery']),
                    [[len(se['rows']) for se in sp['sections']] for sp in s['sectionPages']]))
    out.append(('apps',[len(pg['items']) for pg in D['parts'][2]['pages']], sum(len(it['paras']) for pg in D['parts'][2]['pages'] for it in pg['items'])))
    out.append(('exp',len(D['parts'][3]['containers']['table']['rows']),len(D['parts'][3]['incoterms']['table']['rows'])))
    out.append(('back',len(D['back']['contact'])))
    return out
langs=sys.argv[1:]
S={l:sig(json.load(open(f'content/{l}.json'))) for l in langs}
nd=0
for i,row in enumerate(S[langs[0]]):
    for l in langs[1:]:
        if S[l][i]!=row: nd+=1; print('DIFF',l,row,'<>',S[l][i])
print('diffs',nd)
