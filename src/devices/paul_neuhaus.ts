import * as fz from "../converters/fromZigbee";
import * as exposes from "../lib/exposes";
import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["NLG-remote", "Neuhaus remote"],
        model: "100.462.31",
        vendor: "Paul Neuhaus",
        description: "Q-REMOTE",
        fromZigbee: [
            fz.command_on,
            fz.command_off,
            fz.command_toggle,
            fz.command_step,
            fz.command_move_to_color_temp,
            fz.command_stop,
            fz.command_move_to_color,
            fz.command_move,
            fz.command_color_loop_set,
            fz.command_enhanced_move_to_hue_and_saturation,
            fz.tint_scene,
            fz.command_recall,
        ],
        exposes: [
            e.action([
                "on",
                "off",
                "toggle",
                "brightness_step_up",
                "brightness_step_down",
                "color_temperature_move",
                "color_move",
                "brightness_stop",
                "brightness_move_up",
                "brightness_move_down",
                "color_loop_set",
                "enhanced_move_to_hue_and_saturation",
                "recall_*",
                "scene_*",
            ]),
            e.action_group(),
        ],
        toZigbee: [],
    },
    {
        zigbeeModel: ["NLG-CCT light"],
        model: "NLG-CCT light",
        vendor: "Paul Neuhaus",
        description: "Various color temperature lights (e.g. 100.424.11)",
        extend: [m.light({colorTemp: {range: undefined}})],
    },
    {
        zigbeeModel: ["Neuhaus NLG-TW light", "NLG-TW light"],
        model: "NLG-TW light",
        vendor: "Paul Neuhaus",
        description: "Various tunable white lights (e.g. 8195-55)",
        extend: [m.light({colorTemp: {range: [153, 370]}})],
    },
    {
        zigbeeModel: ["NLG-RGBW light "], // the space as the end is intentional, as this is what the device sends
        model: "NLG-RGBW_light",
        vendor: "Paul Neuhaus",
        description: "Various RGBW lights (e.g. 100.110.39)",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
        endpoint: (device) => {
            return {default: 2};
        },
    },
    {
        zigbeeModel: ["NLG-RGBW light"],
        model: "NLG-RGBW__light",
        vendor: "Paul Neuhaus",
        description: "Various RGBW lights (e.g. 100.111.57)",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["NLG-RGB-TW light"],
        model: "NLG-RGB-TW light",
        vendor: "Paul Neuhaus",
        description: "Various RGB + tunable white lights (e.g. 100.470.92)",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["NLG-plug"],
        model: "100.425.90",
        vendor: "Paul Neuhaus",
        description: "Q-PLUG adapter plug with night orientation light",
        extend: [m.onOff()],
    },
    {
        zigbeeModel: ["JZ-CT-Z01"],
        model: "100.110.51",
        vendor: "Paul Neuhaus",
        description: "Q-FLAG LED panel, Smart-Home CCT",
        extend: [m.light({colorTemp: {range: undefined}})],
    },
    {
        zigbeeModel: ["JZ-RC-J4R"],
        model: "E0040006",
        vendor: "Paul Neuhaus",
        description: "Q RGBW remote controller",
        fromZigbee: [
            fz.command_step,
            fz.command_enhanced_move_to_hue_and_saturation,
            fz.command_move_to_color_temp,
            fz.command_on,
            fz.command_off,
            fz.command_color_loop_set,
        ],
        toZigbee: [],
        exposes: [
            e.action([
                "on",
                "off",
                "brightness_step_up",
                "brightness_step_down",
                "color_move",
                "color_temperature_move",
                "brightness_stop",
                "brightness_move_up",
                "brightness_move_down",
                "color_loop_set",
                "enhanced_move_to_hue_and_saturation",
            ]),
            e.action_group(),
        ],
    },
    {
        zigbeeModel: ["JZ-RGBW-Z01"],
        model: "100.075.74",
        vendor: "Paul Neuhaus",
        description: "Q-VIDAL RGBW ceiling lamp, 6032-55",
        endpoint: (device) => {
            return {default: 2};
        },
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["JZD60-J4R150"],
        model: "100.001.96",
        vendor: "Paul Neuhaus",
        description: "Q-LED Lamp RGBW E27 socket",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["Neuhaus RGB+CCT light"],
        model: "100.491.61",
        vendor: "Paul Neuhaus",
        description: "Q-MIA LED RGBW wall lamp, 9185-13",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
];
