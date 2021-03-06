/*******************************************************************************
 * Copyright 2019 Cognizant Technology Solutions
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
import { Injectable } from '@angular/core';
import { RestCallHandlerService } from '@insights/common/rest-call-handler.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



export interface IBlockChainService {

    getAllAssets(startDate: string, endDate: string, toolname: string): Promise<any>;
    getAssetInfo(assetID: string): Promise<any>;
    getAssetHistory(assetID: string): Promise<any>;
    exportToPdf(pdfData:any):Observable<any>;
}




@Injectable()
export class BlockChainService implements IBlockChainService {

    constructor(private restCallHandlerService: RestCallHandlerService, private httpClient:HttpClient, private cookieService: CookieService) {
    }

    getAllAssets(startDate: string, endDate: string, toolname: string): Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("GET_ALL_ASSETS", { 'startDate': startDate, 'endDate': endDate, 'toolName':toolname });
    }

    getAssetInfo(assetID: string): Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("GET_ASSET_INFO", { 'assetId': assetID });
    }

    getAssetHistory(assetID: string): Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("GET_ASSET_HISTORY", { 'assetId': assetID });
    }

    exportToPdf(pdfData):Observable<Blob> {
        var authToken = this.cookieService.get('Authorization');
        var EXPORT_TO_PDF = "/PlatformAuditService/traceability/getAuditReport";
        var headers_object = new HttpHeaders();                
        headers_object = headers_object.append("Content-Type", "application/json");
        headers_object = headers_object.append("Authorization", authToken);
        return this.httpClient.post(EXPORT_TO_PDF, pdfData, {headers:headers_object, responseType: 'blob'});
    }

}

