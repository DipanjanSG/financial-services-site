class Article
{
   constructor(title="", month="", date="", coverPic="" , middleAlignedQuote="", sideAlignedQuote="")
   {
    this.title = title || "";
    this.month   = month   || "";
    this.date   = date   || "";
    this.coverPic = coverPic || "";
    this.middleAlignedQuote   = middleAlignedQuote   || "";
    this.sideAlignedQuote = sideAlignedQuote || "";
   }

}


export default Article;