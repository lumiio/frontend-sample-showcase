/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import { SampleSpec } from "../../Components/SampleShowcase/SampleShowcase";
import { GithubLink } from "../../Components/GithubLink";
import "../../common/samples-common.scss";

// cSpell:ignore imodels

export function getViewportOnlySpec(): SampleSpec {
  return ({
    name: "viewport-only-sample",
    label: "Viewport Only",
    image: "viewport-only-thumbnail.png",
    setup: () => { return <ViewportOnly /> },
  });
}

export class ViewportOnly extends React.Component<{}, {}> {

  /** The sample's render method */
  public render() {
    return (
      <>
        { /* This is the ui specific for this sample.*/}
        <div className="sample-ui">
          <div>
            <span>Use the toolbar at the right to navigate the model.</span>
            <GithubLink linkTarget="https://github.com/imodeljs/imodeljs-samples/tree/master/frontend-samples/viewer-only-sample" />
          </div>
        </div>
      </>
    );
  }
}