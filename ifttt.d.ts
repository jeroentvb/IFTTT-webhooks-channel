declare class IFTTT {
  constructor (key: string)
  post (eventName: string, value: any[]): Promise<any>
}

export default IFTTT
