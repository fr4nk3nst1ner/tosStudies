input atrMultiplier1 = 1.5;
input atrMultiplier2 = 3.0;
input length = 21;

def atr = Average(TrueRange(high, close, low), length);

plot Stop1 = close - atrMultiplier1 * atr;
plot Stop2 = close - atrMultiplier2 * atr;

Stop1.SetDefaultColor(Color.RED);
Stop1.SetLineWeight(2);
Stop1.SetStyle(Curve.SHORT_DASH);

Stop2.SetDefaultColor(Color.DARK_RED);
Stop2.SetLineWeight(2);
Stop2.SetStyle(Curve.LONG_DASH);

