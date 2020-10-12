import {IFetcher} from './model'
import {EHTTPMethods} from '../../constants/shared'

class Fetcher implements IFetcher{
    private headers: Headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    })

    addHeader(name: string, value: string): void {
        this.headers.set(name, value)
    }

    deleteHeader(name: string): void {
        this.headers.delete(name)
    }

    get<T>(url: string, body?: any): Promise<T> {
        return this.invokeFetch(url, this.shapeRequestInit(EHTTPMethods.get, body))
    }

    post<T>(url: string, body?: any): Promise<T> {
        return this.invokeFetch(url, this.shapeRequestInit(EHTTPMethods.post, body))
    }

    put<T>(url: string, body?: any): Promise<T> {
        return this.invokeFetch(url, this.shapeRequestInit(EHTTPMethods.put, body))
    }

    delete<T>(url: string, body?: any): Promise<T> {
        return this.invokeFetch(url, this.shapeRequestInit(EHTTPMethods.delete, body))
    }

    private invokeFetch = async<T>(url: string, requestInit: RequestInit): Promise<T> => {
        const response: Response = await fetch(url, requestInit)

        if (response.ok) {
            return response.json()
        }

        throw response
    }

    private shapeRequestInit = (method: EHTTPMethods, body: any): RequestInit => {
        return {
            headers: this.headers,
            method,
            body: JSON.stringify(body)
        }
    }
}

const fetcher = new Fetcher()

export default fetcher
