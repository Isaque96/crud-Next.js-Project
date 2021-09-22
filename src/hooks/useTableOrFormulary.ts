import { useState } from "react";

export default function useTableOrFormulary() {  
  const [visible, setVisible] = useState<'table' | 'formulary'>('table');

  const showTable = () => setVisible('table');
  const showFormulary = () => setVisible('formulary');

  return {
    visibleFormulary: visible === 'formulary',
    visibleTable: visible === 'table',
    showTable,
    showFormulary
  }
}