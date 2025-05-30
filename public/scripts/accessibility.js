// Accessibility manager simplificado para compatibilidad
class AccessibilityManager {
  constructor() {
    // Solo mantener funciones básicas para compatibilidad
    this.init();
  }

  init() {
    // Verificar si el FloatingAccessibilityButton está presente
    if (document.getElementById('floating-accessibility-button')) {
      console.log('FloatingAccessibilityButton detectado - AccessibilityManager en modo compatibilidad');
      return; // No hacer nada si está el botón flotante
    }
    
    // Solo inicializar si no hay botón flotante
    this.addBasicEventListeners();
  }

  addBasicEventListeners() {
    // Event listeners básicos para compatibilidad con el AccessibilityBar antiguo
    document.addEventListener('keydown', (e) => {
      // Atajo de teclado Ctrl+Alt+A para abrir accesibilidad
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        const floatingBtn = document.getElementById('floating-toggle');
        if (floatingBtn) {
          floatingBtn.focus();
        }
      }
    });
  }
}

// Inicializar solo si DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.accessibilityManager = new AccessibilityManager();
  });
} else {
  window.accessibilityManager = new AccessibilityManager();
}