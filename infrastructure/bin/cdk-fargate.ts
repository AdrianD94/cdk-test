#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrStack } from '../lib/ecr.stack';
import { VpcStack } from '../lib/vpc.stack';
import { EcsStack } from '../lib/ecs.stack';


const app = new cdk.App();
const repository = new EcrStack(app, EcrStack.name, {});
const vpc = new VpcStack(app, VpcStack.name, {});
new EcsStack(app, EcsStack.name, { vpc: vpc.vpc, repository: repository.repository });