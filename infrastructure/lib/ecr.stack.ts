import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { IRepository, Repository } from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";

export class EcrStack extends Stack {
    public repository: IRepository;
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        this.repository = new Repository(this, 'test-repo', {
            imageScanOnPush: false,
            removalPolicy: RemovalPolicy.DESTROY
        })
    }
}