import { ModalConfig, ModalConfigData } from '@models/modalConfig';

export function createModalConfig(data: ModalConfigData): ModalConfig {
  return {
    data,
    disableClose: true,
    width: '400px',
    maxWidth: '90%',
  };
}
