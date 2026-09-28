# CFF tabanlı OTF → TrueType (glyf). Chromium CFF fontları PDF'e Type 3 olarak
# gömüyor (ekranda ipucusuz çizim, bazı araçlarda metin çıkarma sorunları);
# TrueType olarak gömülünce düzgün CIDFontType2 olur. (fontTools otf2ttf örneği)
import sys
from fontTools.ttLib import TTFont, newTable
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.ttGlyphPen import TTGlyphPen

def glyphs_to_quadratic(glyphs, max_err=1.0, reverse_direction=True):
    out = {}
    for gname in glyphs.keys():
        tt = TTGlyphPen(glyphs)
        glyphs[gname].draw(Cu2QuPen(tt, max_err, reverse_direction=reverse_direction))
        out[gname] = tt.glyph()
    return out

def convert(src, dst):
    f = TTFont(src)
    assert f.sfntVersion == 'OTTO' and 'CFF ' in f
    order = f.getGlyphOrder()
    f['loca'] = newTable('loca')
    f['glyf'] = glyf = newTable('glyf')
    glyf.glyphOrder = order
    glyf.glyphs = glyphs_to_quadratic(f.getGlyphSet())
    del f['CFF ']
    if 'VORG' in f: del f['VORG']
    glyf.compile(f)
    hmtx = f['hmtx']
    for name, g in glyf.glyphs.items():
        if hasattr(g, 'xMin'): hmtx[name] = (hmtx[name][0], g.xMin)
    f['maxp'] = maxp = newTable('maxp')
    maxp.tableVersion = 0x00010000
    maxp.maxZones = 1; maxp.maxTwilightPoints = 0; maxp.maxStorage = 0; maxp.maxFunctionDefs = 0
    maxp.maxInstructionDefs = 0; maxp.maxStackElements = 0; maxp.maxSizeOfInstructions = 0
    maxp.maxComponentElements = max((len(getattr(g, 'components', []) or []) for g in glyf.glyphs.values()), default=0)
    maxp.compile(f)
    post = f['post']; post.formatType = 2.0; post.extraNames = []; post.mapping = {}; post.glyphOrder = order
    f.sfntVersion = '\000\001\000\000'
    f.save(dst)

if __name__ == '__main__':
    convert(sys.argv[1], sys.argv[2])
