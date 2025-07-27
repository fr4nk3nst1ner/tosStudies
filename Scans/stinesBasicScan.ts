# Screen 1: Finds strong momentum stocks above key moving averages

# Current price and volume
def price = close;
def volume = volume;

# Daily dollar volume filter (price * volume)
def dollarVol = price * volume;

# Relative strength over 1 year and 3 months
def perf12 = price / price[252] - 1;  # 252 trading days ≈ 1 year
def perf3 = price / price[63] - 1;    # 63 trading days ≈ 3 months

# Moving average checks
def above50dma = price >= Average(price, 50);
def above200dma = price >= Average(price, 200);

# Final screen:
# - price ≥ $10
# - dollar volume ≥ $25M
# - 12-month RS ≥ 60%
# - 3-month RS ≥ 60%
# - price is above 50 and 200 day MAs
plot scan = 
    price >= 10 and
    dollarVol >= 25000000 and
    perf12 >= 0.60 and
    perf3 >= 0.60 and
    above50dma and
    above200dma;
