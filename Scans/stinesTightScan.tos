# Screen 2: Finds strong RS stocks near highs with controlled volatility

# Current price and volume
def price = close;
def volume = volume;

# Dollar volume: filter for minimum $25M/day
def dollarVol = price * volume;

# Relative strength over different timeframes
def perf12 = price / price[252] - 1;  # 1-year RS
def perf6 = price / price[126] - 1;  # 6-month RS
def perf3 = price / price[63] - 1;   # 3-month RS

# Trend strength: price above 50MA and ≥5% above 200MA
def above50dma = price >= Average(price, 50);
def above200dmaPct = (price - Average(price, 200)) / Average(price, 200);

# Volatility: 21-day ATR must be 1%–4% of price
def atr = Average(TrueRange(high, close, low), 21);
def atrPct = atr / price;

# % Off high: within 15% of 52-week high
def high52 = Highest(price, 252);
def nearHigh = price / high52;

# Final screen:
# - Price ≥ $10
# - Dollar volume ≥ $25M
# - RS for 12m, 6m, 3m ≥ 70%
# - Price ≥ 50MA
# - ≥5% above 200MA
# - ATR is 1–4% of price
# - ≤15% below 52-week high
plot scan = 
    price >= 10 and
    dollarVol >= 25000000 and
    perf12 >= 0.70 and
    perf6 >= 0.70 and
    perf3 >= 0.70 and
    above50dma and
    above200dmaPct >= 0.05 and
    atrPct >= 0.01 and atrPct <= 0.04 and
    nearHigh >= 0.85;
