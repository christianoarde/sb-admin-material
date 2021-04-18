import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApi } from "./base.api";
import { environment } from "src/environments/environment";

const API_URL = environment.API_URL;

@Injectable({
  providedIn: "root",
})

export class StudentApi extends BaseApi {

  constructor(
    public http: HttpClient
  ) {
    super(http)
    this.init()
  }

  init() {
    this.resourceUrl = `${API_URL}/students`;
    super.init();
  }

}