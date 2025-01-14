/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";

import { CustomCheckboxesTree } from "./CustomCheckboxesTreeApp";
import { ControlPane } from "common/ControlPane/ControlPane";

export default class CustomCheckboxesTreeUI extends React.Component<{}> {

  public render() {
    return (
      <>
        <ControlPane instructions="This tree demonstrates the ability to render customized icons as the checkboxes for the nodes in a tree."></ControlPane>
        <div className="sample-tree tree">
          <CustomCheckboxesTree></CustomCheckboxesTree>
        </div>
      </>
    );
  }

}
