declare upper;

# Detect aggregation
def agg = GetAggregationPeriod();
def isWeekly = agg >= AggregationPeriod.WEEK;
def isDaily = !isWeekly;

# --- Set MA lengths based on chart type ---
def lenEmaShort  = if isWeekly then 4  else 10;
def lenEmaMed    = if isWeekly then 8  else 21;
def lenSma50     = if isWeekly then 10 else 50;
def lenSma100    = if isWeekly then 20 else 100;
def lenSma200    = if isWeekly then 40 else 200;

# --- Calculate EMAs ---
def emaShort = ExpAverage(close, lenEmaShort);
def emaMed   = ExpAverage(close, lenEmaMed);

# --- Calculate SMAs ---
def sma50  = Average(close, lenSma50);
def sma100 = Average(close, lenSma100);
def sma200 = Average(close, lenSma200);

# --- Plot MA lines with colors ---
plot EMA_10  = emaShort;
EMA_10.SetDefaultColor(Color.GRAY);
EMA_10.SetLineWeight(2);

plot EMA_21  = emaMed;
EMA_21.SetDefaultColor(Color.LIME);
EMA_21.SetLineWeight(2);

plot SMA_50  = sma50;
SMA_50.SetDefaultColor(Color.CYAN);
SMA_50.SetLineWeight(2);

plot SMA_100 = sma100;
SMA_100.SetDefaultColor(Color.BLUE);
SMA_100.SetLineWeight(2);

plot SMA_200 = sma200;
SMA_200.SetDefaultColor(Color.RED);
SMA_200.SetLineWeight(2);
