import * as React from 'react';
import { DetailsPage, DetailsPageProps } from '@console/internal/components/factory';
import { navFactory } from '@console/internal/components/utils';
import { viewYamlComponent } from '@console/internal/components//utils/horizontal-nav';
import { DevPreviewBadge } from '@console/shared';
import { PipelineRunDetails } from './PipelineRunDetails';
import { PipelineRunLogsWithActiveTask } from './PipelineRunLogs';

const PipelineRunDetailsPage: React.FC<DetailsPageProps> = (props) => (
  <DetailsPage
    {...props}
    pages={[
      navFactory.details(PipelineRunDetails),
      navFactory.editYaml(viewYamlComponent),
      {
        href: 'logs',
        path: 'logs/:name?',
        name: 'Logs',
        component: PipelineRunLogsWithActiveTask,
      },
    ]}
    badge={<DevPreviewBadge />}
  />
);

export default PipelineRunDetailsPage;
