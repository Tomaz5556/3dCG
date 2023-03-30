﻿#version 400 core

out vec4 outputColor;

in vec2 vUv;

uniform sampler2D texture0;

void main()
{
    outputColor = texture(texture0, vUv);
}