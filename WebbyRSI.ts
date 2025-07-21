declare lower;

input atrLength = 50;
input stretchedLevel = 3.0;
input showSMAExtension = yes;

# Moving averages
def ema21 = ExpAverage(close, 21);
def sma10 = Average(close, 10);

# ATR calculation
def atr = Average(TrueRange(high, close, low), atrLength);

# Price deviation from EMAs
def lowV21  = low - ema21;
def highV21 = ema21 - high;
def highV10 = high - sma10;

# Scaled by ATR
def rsiPosVal = if lowV21 > 0 then lowV21 / atr else Double.NaN;
def rsiNegVal = if highV21 > 0 then highV21 / atr else Double.NaN;
def smaExtVal = if highV10 > 0 then highV10 / atr else Double.NaN;

# Plot RSI positive (low > ema21)
plot RSIPOS_Plot = rsiPosVal;
RSIPOS_Plot.SetDefaultColor(Color.GREEN);
RSIPOS_Plot.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
RSIPOS_Plot.SetLineWeight(2);

# Plot RSI negative (high < ema21)
plot RSINEG_Plot = rsiNegVal;
RSINEG_Plot.SetDefaultColor(Color.RED);
RSINEG_Plot.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
RSINEG_Plot.SetLineWeight(2);

# Overextension level
plot ExtendedLevel = stretchedLevel;
ExtendedLevel.SetDefaultColor(Color.RED);
ExtendedLevel.SetStyle(Curve.FIRM);
ExtendedLevel.SetLineWeight(2);

# SMA Extension (high vs SMA10 scaled by ATR)
plot SMAExt_Plot = if showSMAExtension and !IsNaN(smaExtVal) then smaExtVal else Double.NaN;
SMAExt_Plot.SetDefaultColor(Color.ORANGE);
SMAExt_Plot.SetLineWeight(2);
SMAExt_Plot.SetStyle(Curve.LONG_DASH);
