input length = 21;
def atr = Average(TrueRange(high, close, low), length);
AddLabel(yes, Round(atr, 2) + "%", Color.WHITE);
plot Data = Round(atr, 2);
