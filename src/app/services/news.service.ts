import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key = "d801b7e7be614ffbbddc19634e184480";

  constructor(private http : HttpClient) {
  }

  initSource (){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+ this.api_key)
  }

  initArticle(){
      return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key)
  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
