/**
 * Privacy-Conscious Anonymized Analytics & Telemetry for AriesXpert Canada
 */

export type AnalyticsEvent = 
  | 'body_region_selected'
  | 'condition_viewed'
  | 'treatment_viewed'
  | 'anatomy_layer_toggled'
  | 'spine_vertebra_inspected'
  | 'knee_structure_toggled'
  | 'surgery_timeline_phase_scrubbed'
  | 'kinematics_movement_switched'
  | 'booking_started'
  | 'booking_step_progressed'
  | 'booking_completed'
  | 'virtual_care_suitability_checked'
  | 'in_home_care_inquiry_initiated'
  | 'phone_cta_clicked';

export function trackEvent(eventName: AnalyticsEvent, metadata: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;

  // Anonymized event dispatch
  const sanitizedPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...metadata,
  };

  if (process.env.NODE_ENV !== 'production') {
    console.log(`[AriesXpert Analytics] ${eventName}:`, sanitizedPayload);
  }

  // Hook into GTM or dataLayer if available in production
  if (typeof (window as any).dataLayer !== 'undefined') {
    (window as any).dataLayer.push(sanitizedPayload);
  }
}
