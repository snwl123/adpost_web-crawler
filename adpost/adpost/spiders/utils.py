def start_code():
    code = """  test('GET /', async () => {
        const results = await request("https://www.adpost.com");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })\n\n"""

    return code

def response_test_200(endpoint):
    code = """  test('GET /%s/', async () => {
        const results = await request("%s");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(200);

        const dom = results.dom
        const titleTag = getTitleTag(dom)
        const titleInnerText = titleTag.children[0].data;

        expect(titleInnerText).toBe("hello world")
    })\n\n"""%(endpoint, 'https://www.adpost.com/'+ endpoint)

    return code


def response_test_301(endpoint):
    code = """  test('GET /%s', async () => {
        const results = await request("%s");
        const statusCode = results.res.statusCode;
        const headers = results.res.headers;

        expect(statusCode).toBe(301);
    })\n\n"""%(endpoint, 'https://www.adpost.com/'+ endpoint)

    return code