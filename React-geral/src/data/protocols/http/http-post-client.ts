import { HttpResponse } from '.';

export type HttpPostParams<T> = {
    url: string;
    body?: T;
};

// T e R: A classe que estiver instanciando essa interface, informará o tipo
export interface HttpPostClient<T, R>{ // T: O tipo do body do httpPostClient
                                        // R: O tipo do body do retorno do httpPostClient
    post (params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}