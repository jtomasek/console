import * as React from 'react';
import { getNodeRoles, getMachineRole } from '@console/shared';
import { DASH } from '@console/shared/src/constants';
import { MachineKind, NodeKind } from '@console/internal/module/k8s';

type BareMetalHostRoleProps = {
  machine?: MachineKind;
  node?: NodeKind;
};

const BareMetalHostRole: React.FC<BareMetalHostRoleProps> = ({ machine, node }) => (
  <>
    {getNodeRoles(node)
      .sort()
      .join(', ') ||
      getMachineRole(machine) ||
      DASH}
  </>
);

export default BareMetalHostRole;
