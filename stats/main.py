from utils import is_leap_year, days_in_month, next_day, str_dates


# read the data
with open('2ka_plastic_data.txt') as f:
    lines = f.read().strip().splitlines()
curr_date = (2019, 8, 29)



# parse lines
sparse_dates = []
sparse_weights = []
for line in lines:
    date_str, weight_parts = line.strip().split(': ')
    weight = sum(float(x) for x in weight_parts.split(', '))
    date = tuple(int(x) for x in date_str.split('-'))
    sparse_dates.append(date)
    sparse_weights.append(weight)

# complete unlisted dates by distributing measurements uniformly over days
full_d = []
full_k = []
full_a = []
full_w = []

week_day = 3
i = 0
l = 0 # collection period length
while curr_date != sparse_dates[-1]:
    curr_date = next_day(curr_date)
    l += 1
    week_day = (week_day + 1) % 7
    full_d.append(curr_date)
    full_w.append(week_day)
    if sparse_dates[i] == curr_date:
        for j in range(l):
            weight = sparse_weights[i]
            full_a.append(weight if j + 1 == l else 0)
            full_k.append(weight / l)
        l = 0
        i += 1

# sum up
total_days = len(full_d)
total_actions = len(sparse_weights)
total_weight = sum(sparse_weights)

#print(['%.2f' % k for k in full_k])

report_text = '\n'.join([
    u'Всего собрано: {:.3f} кг за {:d} дней (в среднем {:.3f} кг в день)'.format(
    total_weight, total_days, total_weight / total_days),
    u'В среднем собирается {:.3f} кг раз в {:.3f} дня'.format(
    total_weight / total_actions, total_days / total_actions),
])
#print(report_text)

with open('report.txt', 'wb') as f:
    f.write(report_text.encode('utf-8'))



# now draw plots
from matplotlib import pyplot as plt

figsize = (24, 8) # plot size
dpi = 200 # output image size

# color is affected by month parity and sundays
palette = ['#55aaff', '#4488cc', '#7788ff', '#6666cc']
colors = [palette[int(wd == 6) + 2 * (d[1] & 1)] for wd, d in zip(full_w, full_d)]

plt.figure(figsize=figsize)
plt.title('Статистика сбора пластиковых бутылок в 2ке (крышечки собираются отдельно)')
plt.axhline(1, color='gray', linestyle='--')
plt.bar(str_dates(full_d), full_k, width=0.9, color=colors)
plt.xticks(str_dates(full_d)[::3], rotation=75)
plt.ylabel('КГ в день')
plt.grid(axis='y', which='both')
plt.savefig('bottle-collection-stat-2ka.png', dpi=dpi, bbox_inches='tight')
#plt.show()

plt.figure(figsize=figsize)
plt.title('Даты выноса пластиковых бутылок в 2ке (крышечки собираются отдельно)')
plt.axhline(4, color='gray', linestyle='--')
plt.bar(str_dates(full_d), full_a, width=0.9, color=colors)
plt.xticks(str_dates(sparse_dates), rotation=85)
plt.ylabel('КГ')
plt.grid(axis='y')
plt.savefig('bottle-collection-days-2ka.png', dpi=dpi, bbox_inches='tight')
#plt.show()

# smoothing experiments
gamma = 0.9
smooth_k = full_k[0]
full_k_smooth = [smooth_k]
for k in full_k[1:]:
    smooth_k = smooth_k * gamma + k * (1 - gamma)
    full_k_smooth.append(smooth_k)

plt.figure(figsize=figsize)
plt.title('Статистика сбора пластиковых бутылок в 2ке (крышечки собираются отдельно)')
plt.axhline(0, color='k', linestyle='-')
plt.axhline(1, color='gray', linestyle='--')
plt.plot(str_dates(full_d), full_k, label='Точное')
plt.plot(str_dates(full_d), full_k_smooth, linestyle='--', label='Экспоненциальное среднее (gamma=0.9)')
plt.xticks(str_dates(full_d)[::7], rotation=70)
plt.ylabel('КГ в день')
plt.grid(axis='y')
plt.legend()
plt.savefig('bottle-collection-smooth-2ka.png', dpi=dpi, bbox_inches='tight')
#plt.show()
