describe('https://www.adpost.com', () => {

  test('GET /', async () => {
        const results = await request("https://www.adpost.com");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /us/', async () => {
        const results = await request("https://www.adpost.com/us");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /us', async () => {
        const results = await request("https://www.adpost.com/us");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /ca/', async () => {
        const results = await request("https://www.adpost.com/ca");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /ca', async () => {
        const results = await request("https://www.adpost.com/ca");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /uk/', async () => {
        const results = await request("https://www.adpost.com/uk");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /uk', async () => {
        const results = await request("https://www.adpost.com/uk");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /ie/', async () => {
        const results = await request("https://www.adpost.com/ie");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /ie', async () => {
        const results = await request("https://www.adpost.com/ie");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /au/', async () => {
        const results = await request("https://www.adpost.com/au");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /au', async () => {
        const results = await request("https://www.adpost.com/au");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /nz/', async () => {
        const results = await request("https://www.adpost.com/nz");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /nz', async () => {
        const results = await request("https://www.adpost.com/nz");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /sg/', async () => {
        const results = await request("https://www.adpost.com/sg");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /sg', async () => {
        const results = await request("https://www.adpost.com/sg");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /my/', async () => {
        const results = await request("https://www.adpost.com/my");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /my', async () => {
        const results = await request("https://www.adpost.com/my");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /ph/', async () => {
        const results = await request("https://www.adpost.com/ph");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /ph', async () => {
        const results = await request("https://www.adpost.com/ph");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /id/', async () => {
        const results = await request("https://www.adpost.com/id");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /id', async () => {
        const results = await request("https://www.adpost.com/id");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /in/', async () => {
        const results = await request("https://www.adpost.com/in");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /in', async () => {
        const results = await request("https://www.adpost.com/in");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /hk/', async () => {
        const results = await request("https://www.adpost.com/hk");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /hk', async () => {
        const results = await request("https://www.adpost.com/hk");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/index/', async () => {
        const results = await request("https://www.adpost.com/home/index");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/index', async () => {
        const results = await request("https://www.adpost.com/home/index");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /us/?db=&website=&language=&session_key=&print_terms_page=on/', async () => {
        const results = await request("https://www.adpost.com/us/?db=&website=&language=&session_key=&print_terms_page=on");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /us/?db=&website=&language=&session_key=&print_terms_page=on', async () => {
        const results = await request("https://www.adpost.com/us/?db=&website=&language=&session_key=&print_terms_page=on");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /us/?db=&website=&language=&session_key=&print_privacy_page=on/', async () => {
        const results = await request("https://www.adpost.com/us/?db=&website=&language=&session_key=&print_privacy_page=on");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /us/?db=&website=&language=&session_key=&print_privacy_page=on', async () => {
        const results = await request("https://www.adpost.com/us/?db=&website=&language=&session_key=&print_privacy_page=on");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /classified_ads/', async () => {
        const results = await request("https://www.adpost.com/classified_ads");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /classified_ads', async () => {
        const results = await request("https://www.adpost.com/classified_ads");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /us/support/?website=;language=;s=/', async () => {
        const results = await request("https://www.adpost.com/us/support/?website=;language=;s=");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /us/support/?website=;language=;s=', async () => {
        const results = await request("https://www.adpost.com/us/support/?website=;language=;s=");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/bedroom/', async () => {
        const results = await request("https://www.adpost.com/home/bedroom");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/bedroom', async () => {
        const results = await request("https://www.adpost.com/home/bedroom");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/kitchen/', async () => {
        const results = await request("https://www.adpost.com/home/kitchen");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/kitchen', async () => {
        const results = await request("https://www.adpost.com/home/kitchen");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/living_room/', async () => {
        const results = await request("https://www.adpost.com/home/living_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/living_room', async () => {
        const results = await request("https://www.adpost.com/home/living_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/bathroom/', async () => {
        const results = await request("https://www.adpost.com/home/bathroom");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/bathroom', async () => {
        const results = await request("https://www.adpost.com/home/bathroom");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/outdoor_living_room/', async () => {
        const results = await request("https://www.adpost.com/home/outdoor_living_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/outdoor_living_room', async () => {
        const results = await request("https://www.adpost.com/home/outdoor_living_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/laundry/', async () => {
        const results = await request("https://www.adpost.com/home/laundry");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/laundry', async () => {
        const results = await request("https://www.adpost.com/home/laundry");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/home_office/', async () => {
        const results = await request("https://www.adpost.com/home/home_office");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/home_office', async () => {
        const results = await request("https://www.adpost.com/home/home_office");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/patio/', async () => {
        const results = await request("https://www.adpost.com/home/patio");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/patio', async () => {
        const results = await request("https://www.adpost.com/home/patio");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/dining_room/', async () => {
        const results = await request("https://www.adpost.com/home/dining_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/dining_room', async () => {
        const results = await request("https://www.adpost.com/home/dining_room");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/', async () => {
        const results = await request("https://www.adpost.com/home");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home', async () => {
        const results = await request("https://www.adpost.com/home");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/craftsman-style/', async () => {
        const results = await request("https://www.adpost.com/home/craftsman-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/craftsman-style', async () => {
        const results = await request("https://www.adpost.com/home/craftsman-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/ranch-style/', async () => {
        const results = await request("https://www.adpost.com/home/ranch-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/ranch-style', async () => {
        const results = await request("https://www.adpost.com/home/ranch-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/contemporary-style/', async () => {
        const results = await request("https://www.adpost.com/home/contemporary-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/contemporary-style', async () => {
        const results = await request("https://www.adpost.com/home/contemporary-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/victorian-style/', async () => {
        const results = await request("https://www.adpost.com/home/victorian-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/victorian-style', async () => {
        const results = await request("https://www.adpost.com/home/victorian-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/italianate-style/', async () => {
        const results = await request("https://www.adpost.com/home/italianate-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/italianate-style', async () => {
        const results = await request("https://www.adpost.com/home/italianate-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/colonial-style/', async () => {
        const results = await request("https://www.adpost.com/home/colonial-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/colonial-style', async () => {
        const results = await request("https://www.adpost.com/home/colonial-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/farmhouse-style/', async () => {
        const results = await request("https://www.adpost.com/home/farmhouse-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/farmhouse-style', async () => {
        const results = await request("https://www.adpost.com/home/farmhouse-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/cape_cod-style/', async () => {
        const results = await request("https://www.adpost.com/home/cape_cod-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/cape_cod-style', async () => {
        const results = await request("https://www.adpost.com/home/cape_cod-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

  test('GET /home/tudor-style/', async () => {
        const results = await request("https://www.adpost.com/home/tudor-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })

  test('GET /home/tudor-style', async () => {
        const results = await request("https://www.adpost.com/home/tudor-style");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })

});