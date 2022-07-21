export interface Agreement {
  code: number
  agency?: string
  name: string
  price: number
}

export type NewAgreement = Omit<Agreement, 'code'>
