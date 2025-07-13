declare lower;

def agg = GetAggregationPeriod();
def isWeekly = agg >= AggregationPeriod.WEEK and agg < AggregationPeriod.MONTH;
def isMonthly = agg >= AggregationPeriod.MONTH;
def isDaily = !isWeekly and !isMonthly;

# Adaptive moving average lengths
def length1 = if isMonthly then 12 else if isWeekly then 8 else 21;
def length2 = if isMonthly then 24 else if isWeekly then 21 else 50;

def price = close;
def spxClose = close("SPX");

def rsLine = price / spxClose;

# Moving averages
def smaRS1 = Average(rsLine, length1);
def smaRS2 = Average(rsLine, length2);

# Plots
plot RS = rsLine;
plot SMA1 = smaRS1;
plot SMA2 = smaRS2;

RS.SetDefaultColor(Color.GREEN);
SMA1.SetDefaultColor(Color.ORANGE);
SMA2.SetDefaultColor(Color.BLUE);

RS.SetLineWeight(2);
SMA1.SetLineWeight(2);
SMA2.SetLineWeight(2);
