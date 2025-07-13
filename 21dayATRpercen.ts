declare lower;

def agg = GetAggregationPeriod();
def isWeekly = agg >= AggregationPeriod.WEEK and agg < AggregationPeriod.MONTH;
def isMonthly = agg >= AggregationPeriod.MONTH;
def isDaily = !isWeekly and !isMonthly;

# Adaptive length: 21-day, 4-week, or 3-month
def length = if isMonthly then 3 else if isWeekly then 4 else 21;

# ATR Calculation
def atr = Average(TrueRange(high, close, low), length);
def atrPercent = (atr / close) * 100;

# Plot
plot ATR_Percent = atrPercent;
ATR_Percent.SetLineWeight(2);
ATR_Percent.AssignValueColor(
    if atrPercent > 5 then Color.RED
    else if atrPercent > 3 then Color.ORANGE
    else Color.GREEN
);

AddLabel(yes, 
    (length + "-bar ATR %: " + Round(atrPercent, 2) + "%"), 
    if atrPercent > 5 then Color.RED
    else if atrPercent > 3 then Color.ORANGE
    else Color.GREEN
);
