import { CustomerInterface } from '../../invoice/interfaces/customer.interface';
import { ProductInterface } from '../../invoice/interfaces/product.interface';
import { InvoiceInterface } from '../../invoice/interfaces/invoice.interface';
import { InvoiceItemInterface } from '../../invoice/interfaces/invoice-item.interface';
import { AbstractTransportService } from './abstract-transport.service';
import { PostInvoiceResponseInterface } from '../../invoice/interfaces/post-invoice-response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class RestTransportService implements AbstractTransportService {
  public constructor(private http: HttpClient) {
  }

  public createInvoice(invoice: InvoiceInterface): Observable<PostInvoiceResponseInterface> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/invoices';
    return this.http.post(requestUrl, invoice).map((response: PostInvoiceResponseInterface) => response);
  }

  public updateInvoice(invoice: InvoiceInterface): Observable<PostInvoiceResponseInterface> {
    const requestUrl: string = environment.restApiBaseUrl + `/api/invoices/${invoice.id}`;
    return this.http.put(requestUrl, invoice).map((response: PostInvoiceResponseInterface) => response);
  }

  public getCustomers(): Observable<CustomerInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/customers';
    return this.http.get(requestUrl).map((response: CustomerInterface[]) => response);
  }

  public getInvoices(): Observable<InvoiceInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/invoices';
    return this.http.get(requestUrl).map((response: InvoiceInterface[]) => response);
  }

  public getInvoiceItems(invoiceId: number): Observable<InvoiceItemInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + `/api/invoices/${invoiceId}/items`;
    return this.http.get(requestUrl).map((response: InvoiceItemInterface[]) => response);
  }

  public getProducts(): Observable<ProductInterface[]> {
    const requestUrl: string = environment.restApiBaseUrl + '/api/products';
    return this.http.get(requestUrl).map((response: ProductInterface[]) => response);
  }
}
