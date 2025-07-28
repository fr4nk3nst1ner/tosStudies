input length = 21;
def atr = Average(TrueRange(high, close, low), length);
def atrPercent = (atr / close) * 100;

AddLabel(yes, Round(atrPercent, 2) + "%", Color.WHITE);
plot Data = Round(atrPercent, 2);
