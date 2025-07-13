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

# Plot ATR Percent (optional to also plot raw ATR below)
plot ATR_Percent = atrPercent;
ATR_Percent.SetLineWeight(2);
ATR_Percent.AssignValueColor(
    if atrPercent > 5 then Color.RED
    else if atrPercent > 3 then Color.ORANGE
    else Color.GREEN
);

# Optional: Plot raw ATR (can comment out if not needed)
plot ATR_Value = atr;
ATR_Value.SetDefaultColor(Color.LIGHT_GRAY);
ATR_Value.SetLineWeight(1);
ATR_Value.SetStyle(Curve.SHORT_DASH);

# Label with both values
AddLabel(yes, 
    length + "-bar ATR: " + Round(atr, 2) + " | ATR %: " + Round(atrPercent, 2) + "%",
    if atrPercent > 5 then Color.RED
    else if atrPercent > 3 then Color.ORANGE
    else Color.GREEN
);
