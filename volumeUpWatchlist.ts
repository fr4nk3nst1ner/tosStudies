def volRatio = volume / Average(volume, 50);
plot Data = Round(volRatio, 2);

Data.AssignValueColor(
    if volRatio >= 2 then Color.GREEN
    else if volRatio >= 1.5 then Color.LIME
    else if volRatio >= 1.0 then Color.YELLOW
    else if volRatio >= 0.75 then Color.ORANGE
    else Color.RED
);
