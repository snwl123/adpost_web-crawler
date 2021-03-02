# Adpost Web Scraper
  
A simple web scraper made with Scrapy for Adpost.com.

### Instructions

**1. In order to initialise virtual environment in preferred Python version, perform the following command in your command terminal at your preferred directory.**  
  
```sh
py -(version) -m venv env  
```  
  
Requires: Python >=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*  
  

**2. Activate virtual environment.**  

*On macOS and Linux:*  
```sh
source env/bin/activate
```  

*On Windows:*  
```sh
.\env\Scripts\activate
```
  
  
**3. Install Twisted version 20.3.0.**  
  
```sh
pip install Twisted==20.3.0
```  
   
https://pypi.org/project/Twisted/20.3.0/
  
  
**4. Install Scrapy.**  
  
```sh
pip install Scrapy
```  
   
https://docs.scrapy.org/en/latest/intro/install.html
  
  
**5. Open a new command terminal at the same directory. Perform a git clone.**
```sh
git clone https://github.com/snwl123/adpost_web-crawler
```
Close command terminal if necessary.  
  

**6. In your virtual environment, cd into "..\adpost\".**  
```sh
cd adpost
```
  
  
**7. Run command.**  
```sh
scrapy crawl adpost -s DEPTH_LIMIT = < preferred recursion depth limit (integer) >
```
Set DEPTH_LIMIT to your preferred recursion depth limit.
  
  
**Note** Follow only 2, 6, and 7 for instructions for subsequent set-ups to run your code if you have already completed the initial installation.  
  
  
### Additional Information
  
Not yet implemented checking for webpage title.
  
-  For more information on virtual environments:   
   https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/  



