import { Box, Code, Flex } from "@sanity/ui";
import React from "react";
// import type { NumberInputProps } from "sanity";

import { secondsToMinutes } from "../../lib/secondToMinutes";

export default function Duration(props) {
  return (
    <Flex gap={3} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      {props.value ? (
        <Code size={4}>{secondsToMinutes(props.value)}</Code>
      ) : null}
    </Flex>
  );
}
