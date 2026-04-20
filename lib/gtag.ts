export const GA_MEASUREMENT_ID = 'G-HNY02CZ2ZB'

export const LANDING_CONTEXT = {
  landingName: 'boulevard_aniver',
  landingOffer: 'aniversario',
  city: 'portoAlegre',
  location: 'Porto Alegre',
  destinationProduct: 'salao_perola_aniversario'
}

export const event = ({
  action,
  label,
  value,
  funnelStep
}: {
  action: string
  label?: string
  value?: number
  funnelStep: string
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'landing_page',
      event_label: label || LANDING_CONTEXT.landingName,
      value,
      city: LANDING_CONTEXT.city,
      location: LANDING_CONTEXT.location,
      landing_name: LANDING_CONTEXT.landingName,
      landing_offer: LANDING_CONTEXT.landingOffer,
      landing_source: 'landing_page',
      destination_product: LANDING_CONTEXT.destinationProduct,
      funnel_step: funnelStep
    })
  }
}
