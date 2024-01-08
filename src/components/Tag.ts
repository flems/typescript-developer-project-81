type TagOptions = Record<string, string>;

export default class Tag {
  private readonly singleTags: string[] = ['input', 'img', 'br'];

  private isSingleTag: boolean;

  constructor(
    protected tag: string,
    protected options: TagOptions = {},
    protected content: string = '',
  ) {
    this.isSingleTag = this.singleTags.includes(this.tag);
  }

  public toString() : string {
    const start = `<${this.tag}`;
    const end = this.isSingleTag ? '>' : `</${this.tag}>`;
    const content = this.isSingleTag ? '' : this.content;
    let options = '';

    Object.entries(this.options).forEach(([key, value]) => {
      options += ` ${key}="${value}"`;
    });
    options += this.isSingleTag ? '' : '>';

    return `${start}${options}${content}${end}`;
  }
}
