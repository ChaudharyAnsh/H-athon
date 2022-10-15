import requests
from bs4 import BeautifulSoup
import pandas as pd
url = "https://www.numbeo.com/cost-of-living/rankings_by_country.jsp"
page = requests.get(url)
soup = BeautifulSoup(page.text, 'lxml')
table = soup.find('table', id = 't2')
head = []

for i in table.find_all('th'):
    head.append(i.text)
print(head)

data = pd.DataFrame(columns = head)

for j in table.find_all('tr')[1:]:
    row_data = j.find_all('td')
    row = [i.text for i in row_data]
    
    length = len(data)
    
    data.loc[length] = row

data.to_json('cost_of_living.json')

datatest = pd.read_json("cost_of_living.json")