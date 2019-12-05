import * as React from 'react';
import { getNodeRoles } from '@console/shared';
import { DASH } from '@console/shared/src/constants';
import { NodeKind } from '@console/internal/module/k8s';

type NodeRolesProps = {
  node?: NodeKind;
};

const NodeRoles: React.FC<NodeRolesProps> = ({ node }) => (
  <>
    {getNodeRoles(node)
      .sort()
      .join(', ') || DASH}
  </>
);

export default NodeRoles;
