/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext): void {
    theia.commands.registerCommand({
        id: 'plugin.core.copy.path',
        label: 'Plugin: Copy Path'
    }, () => theia.commands.executeCommand('copyFilePath'));
}

export function stop(): void {
}
