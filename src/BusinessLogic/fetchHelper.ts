
async function request<T>(
    url: string,
    config?: RequestInit
): Promise<T> {
    const response = await fetch(url, config);
    return await response.json();
}


const api = {
    get: <T>(url: string) =>
        request<T>(url),

    post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
        request<TResponse>(url, { method: 'POST', body }),
}

async function httpRequest<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request)
    return await response.json()
}


export { api, httpRequest }