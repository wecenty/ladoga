import type { Schema, Struct } from '@strapi/strapi';

export interface BaseCommonParameters extends Struct.ComponentSchema {
  collectionName: 'components_base_common_parameters';
  info: {
    displayName: 'common_parameters';
  };
  attributes: {
    coating: Schema.Attribute.String;
    material: Schema.Attribute.String & Schema.Attribute.Required;
    max_speed_rpm: Schema.Attribute.Integer;
    mounting_type: Schema.Attribute.String;
    resource_seconds: Schema.Attribute.Integer & Schema.Attribute.Required;
    total_length: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface BaseCuttingPart extends Struct.ComponentSchema {
  collectionName: 'components_base_cutting_parts';
  info: {
    displayName: 'cutting_part';
  };
  attributes: {
    cutting_diameter: Schema.Attribute.Decimal;
    cutting_length: Schema.Attribute.Decimal;
    shank_diameter: Schema.Attribute.Decimal;
  };
}

export interface ToolTypesBoringTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_boring_tools';
  info: {
    description: '';
    displayName: 'boring_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    cutting: Schema.Attribute.Component<'base.cutting-part', false> &
      Schema.Attribute.Required;
    cutting_edges: Schema.Attribute.Integer & Schema.Attribute.Required;
    shank_type: Schema.Attribute.Enumeration<
      [
        '\u041A\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435',
        '\u0422\u043E\u0440\u0446\u0435\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface ToolTypesCenteringTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_centering_tools';
  info: {
    description: '';
    displayName: 'centering_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    mandrel_diameter: Schema.Attribute.Decimal;
    mandrel_length: Schema.Attribute.Decimal;
    max_load: Schema.Attribute.Decimal & Schema.Attribute.Required;
    taper: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ToolTypesCuttingPlate extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_cutting_plates';
  info: {
    description: '';
    displayName: 'cutting_plate';
  };
  attributes: {
    coating: Schema.Attribute.String;
    edge_angle: Schema.Attribute.Decimal & Schema.Attribute.Required;
    length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    material: Schema.Attribute.String & Schema.Attribute.Required;
    mounting_type: Schema.Attribute.String & Schema.Attribute.Required;
    nose_radius: Schema.Attribute.Decimal & Schema.Attribute.Required;
    resource_seconds: Schema.Attribute.Integer & Schema.Attribute.Required;
    thickness: Schema.Attribute.Decimal & Schema.Attribute.Required;
    width: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface ToolTypesDrillingTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_drilling_tools';
  info: {
    description: '';
    displayName: 'drilling_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    cutting: Schema.Attribute.Component<'base.cutting-part', false> &
      Schema.Attribute.Required;
    sharpening_angle: Schema.Attribute.Decimal & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      [
        '\u0421\u043F\u0438\u0440\u0430\u043B\u044C\u043D\u043E\u0435',
        '\u0421\u0442\u0443\u043F\u0435\u043D\u0447\u0430\u0442\u043E\u0435',
        '\u041A\u043E\u0440\u043E\u043D\u0447\u0430\u0442\u043E\u0435',
        '\u041A\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435',
        '\u041F\u0435\u0440\u043E\u0432\u043E\u0435',
        '\u0426\u0435\u043D\u0442\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0435',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface ToolTypesMillingTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_milling_tools';
  info: {
    description: '';
    displayName: 'milling_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    cutting: Schema.Attribute.Component<'base.cutting-part', false> &
      Schema.Attribute.Required;
    landing_hole: Schema.Attribute.Decimal;
    teeth_angle: Schema.Attribute.Decimal & Schema.Attribute.Required;
    teeth_count: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<
      [
        '\u0414\u0438\u0441\u043A\u043E\u0432\u0430\u044F',
        '\u0422\u043E\u0440\u0446\u0435\u0432\u0430\u044F',
        '\u0426\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F',
        '\u0423\u0433\u043B\u043E\u0432\u0430\u044F',
        '\u041A\u043E\u043D\u0446\u0435\u0432\u0430\u044F',
        '\u0424\u0430\u0441\u043E\u043D\u043D\u0430\u044F',
        '\u0427\u0435\u0440\u0432\u044F\u0447\u043D\u0430\u044F',
        '\u041A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F',
      ]
    >;
  };
}

export interface ToolTypesSpecialTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_special_tools';
  info: {
    description: '';
    displayName: 'special_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    shank_dimensions: Schema.Attribute.JSON;
    special_features: Schema.Attribute.JSON;
    type: Schema.Attribute.String & Schema.Attribute.Required;
    working_part_dimensions: Schema.Attribute.JSON;
  };
}

export interface ToolTypesThreadingTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_threading_tools';
  info: {
    description: '';
    displayName: 'threading_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    cutting_length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    shank_type: Schema.Attribute.Enumeration<
      [
        '\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439',
        '\u0426\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439',
      ]
    > &
      Schema.Attribute.Required;
    thread_diameter: Schema.Attribute.Decimal & Schema.Attribute.Required;
    thread_pitch: Schema.Attribute.Decimal & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      [
        '\u0420\u0443\u043D\u043E\u0439',
        '\u0421\u0442\u0430\u043D\u043E\u0447\u043D\u044B\u0439',
        '\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface ToolTypesToolHolder extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_tool_holders';
  info: {
    description: '';
    displayName: 'tool_holder';
  };
  attributes: {
    compatible_plates: Schema.Attribute.JSON;
    length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    material: Schema.Attribute.String & Schema.Attribute.Required;
    mounting_type: Schema.Attribute.String & Schema.Attribute.Required;
    resource_seconds: Schema.Attribute.Integer & Schema.Attribute.Required;
    section_height: Schema.Attribute.Decimal & Schema.Attribute.Required;
    section_width: Schema.Attribute.Decimal & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ToolTypesTurningTool extends Struct.ComponentSchema {
  collectionName: 'components_tool_types_turning_tools';
  info: {
    description: '';
    displayName: 'turning_tool';
  };
  attributes: {
    common: Schema.Attribute.Component<'base.common-parameters', false> &
      Schema.Attribute.Required;
    feed_direction: Schema.Attribute.Enumeration<
      [
        '\u041F\u0440\u0430\u0432\u044B\u0439',
        '\u041B\u0435\u0432\u044B\u0439',
        '\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439',
      ]
    > &
      Schema.Attribute.Required;
    holder: Schema.Attribute.Component<'tool-types.tool-holder', false> &
      Schema.Attribute.Required;
    plate: Schema.Attribute.Component<'tool-types.cutting-plate', false> &
      Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      [
        '\u041F\u0440\u043E\u0445\u043E\u0434\u043D\u043E\u0439',
        '\u041E\u0442\u0440\u0435\u0437\u043D\u043E\u0439',
        '\u0420\u0430\u0441\u0442\u043E\u0447\u043D\u043E\u0439',
        '\u0424\u0430\u0441\u043E\u043D\u043D\u044B\u0439',
        '\u0420\u0435\u0437\u044C\u0431\u043E\u0432\u043E\u0439',
      ]
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.common-parameters': BaseCommonParameters;
      'base.cutting-part': BaseCuttingPart;
      'tool-types.boring-tool': ToolTypesBoringTool;
      'tool-types.centering-tool': ToolTypesCenteringTool;
      'tool-types.cutting-plate': ToolTypesCuttingPlate;
      'tool-types.drilling-tool': ToolTypesDrillingTool;
      'tool-types.milling-tool': ToolTypesMillingTool;
      'tool-types.special-tool': ToolTypesSpecialTool;
      'tool-types.threading-tool': ToolTypesThreadingTool;
      'tool-types.tool-holder': ToolTypesToolHolder;
      'tool-types.turning-tool': ToolTypesTurningTool;
    }
  }
}
