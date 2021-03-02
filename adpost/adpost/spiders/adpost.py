import scrapy
import re
import adpost.spiders.utils as utils

class QuotesSpider(scrapy.Spider):
    name = "adpost"
    
    def __init__(self, url_list = []):
        self.url_list = url_list

    def start_requests(self):
        url = 'https://www.adpost.com/'
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        links = response.css('div a::attr(href)').extract()
        if len(links) != 0:
            for link in links:
                if "http" not in link:
                    link = 'https://www.adpost.com' + links
                if self.url_filter(link):
                    if link[-1] == '/':
                        endpoint = link[:-1][23:]
                    else:
                        endpoint = link[23:]
                    if endpoint not in self.url_list:
                        (self.url_list).append(endpoint)
                        yield scrapy.Request(url=url, callback=self.parse)
        self.writeJS()

    def url_filter(self,url):
        if url_match and ('https://www.adpost.com' in url) and (url != 'https://www.adpost.com/'):
            return (True)
        else:
            return (False)

    def writeJS(self):
        filename = 'www.adpost.com.js'
        with open(filename, 'wb') as f:
            start_code = "describe('https://www.adpost.com', () => {\n\n" + utils.start_code()
            f.write(bytes(start_code, 'utf-8'))
            for endpoint in (self.url_list):
                code = utils.response_test_200(endpoint) + utils.response_test_301(endpoint)
                f.write(bytes(code, 'utf-8'))
            f.write(bytes('});', 'utf-8'))
        self.log(f'Saved file {filename}')