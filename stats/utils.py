# date utils

def is_leap_year(y):
    return ((y % 4 == 0) and (y % 100 != 0)) or (y % 400 == 0)


def days_in_month(y, m):
    return 30 + ((m & 1) ^ (m > 7)) if m != 2 else 28 + is_leap_year(y)

# test - list number of days for all months
#print([days_in_month(2019, m + 1) for m in range(12)])

# d3 = tuple (year, month, day)

def next_day(d3):
    if d3[2] == days_in_month(d3[0], d3[1]):
        if d3[1] == 12:
            return (d3[0] + 1, 1, 1)
        return (d3[0], d3[1] + 1, 1)
    return (d3[0], d3[1], d3[2] + 1)


def str_to_d3(date_str):
    return tuple(int(x) for x in date_str.split('-'))


def d3_to_str(d3):
    return '-'.join('%02d' % x for x in d3)
