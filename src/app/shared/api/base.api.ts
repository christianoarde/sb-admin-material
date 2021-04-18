import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})

export class BaseApi {

  apiEndpoint
  resourceUrl

  constructor(
    public http: HttpClient
  ) {

  }
  
  init() {
    this.apiEndpoint = this.resourceUrl
  }

  update(id, payload: Object): any {
    return this.http.patch(`${this.apiEndpoint}/${id}`, payload);
  }

  get(id): any {
    return this.http.get(`${this.apiEndpoint}/${id}`);
  }

  query(query: Object): any {
    return this.http.get(`${this.apiEndpoint}?${this.buildParams(query)}`);
  }

  buildParams(query: Object): any {
    let paramsArray = [];
    let payload = "";
    let keys = Object.keys(query);
    for (let item of keys) {
      let value = query[item];
      if (!value) {
        continue;
      }
      if (Array.isArray(value)) {
        let payloadArr = [];
        for (let val of value) {
          payloadArr.push(`${item}[]=${encodeURIComponent(val)}`);
        }
        payload = payloadArr.join("&");
      } else {
        payload = item + "=" + encodeURIComponent(value);
      }
      paramsArray.push(payload);
    }
    return paramsArray.join("&");
  }

  create(payload: Object): any {
    return this.http.post(this.apiEndpoint, payload);
  }

  post(url, payload: any): any {
    return this.http.post(`${this.apiEndpoint}/${url}`, payload);
  }

  destroy(id: number): any {
    return this.http.delete(`${this.apiEndpoint}/${id}`);
  }
}