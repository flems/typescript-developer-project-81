export default class HexletCode {
  public static formFor(
    template: Record<string, string>,
    options?: Record<string, string>,
    callback?: () => void,
  ) {
    const htmlTemplate = `<form action="${options?.url || '#'}" method="post"></form>`;
    if (callback) callback();

    return htmlTemplate;
  }
}
