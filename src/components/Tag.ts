type TagOptions = Record<string, string>

export class Tag {
    private readonly singleTags: string[] = ['input', 'img', 'br']
    private isSingleTag: boolean

    constructor (
        protected tag: string,
        protected options: TagOptions = {},
        protected content: string = ''
    ) {
        this.isSingleTag = this.singleTags.includes(this.tag)
    }

    public toString () {
        const start = `<${this.tag}`
        const end = this.isSingleTag ? ' />' : `</${this.tag}>`
        const content = this.isSingleTag ? '' : this.content
        let options = ''

        for (const key in this.options) {
            options += ` ${key}="${this.options[key]}"`
        }
        options += this.isSingleTag ? '' : `>`

        return `${start}${options}${content}${end}`
    }
}

