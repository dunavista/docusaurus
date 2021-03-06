/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare module '@docusaurus/plugin-content-pages' {
  export type Options = import('./types').PluginOptions;
}

declare module '@theme/MDXPage' {
  import type {TOCItem} from '@docusaurus/types';

  export type Props = {
    readonly content: {
      readonly frontMatter: {
        readonly title: string;
        readonly description: string;
        readonly wrapperClassName?: string;
        // eslint-disable-next-line camelcase
        readonly hide_table_of_contents?: string;
      };
      readonly metadata: {readonly permalink: string};
      readonly toc: readonly TOCItem[];
      (): JSX.Element;
    };
  };

  const MDXPage: (props: Props) => JSX.Element;
  export default MDXPage;
}
