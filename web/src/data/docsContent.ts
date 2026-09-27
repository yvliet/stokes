// Raw markdown content imports
import introductionRaw from '../content/docs/getting-started/introduction.md?raw';
import architectureVisionRaw from '../content/docs/getting-started/architecture-vision.md?raw';
import quickstartRaw from '../content/docs/getting-started/quickstart.md?raw';

import untypedSeamsRaw from '../content/docs/architecture/01-untyped-seams.md?raw';
import panicResilienceRaw from '../content/docs/architecture/02-panic-resilience.md?raw';
import boundaryGraphsRaw from '../content/docs/architecture/03-boundary-graphs.md?raw';
import channelManifestsRaw from '../content/docs/architecture/04-channel-manifests.md?raw';
import polyRepoProtocolRaw from '../content/docs/architecture/05-poly-repo-protocol.md?raw';
import projectionIsolationRaw from '../content/docs/architecture/06-projection-isolation.md?raw';
import ciMcpGateRaw from '../content/docs/architecture/07-ci-mcp-gate.md?raw';

import astEngineRaw from '../content/docs/engines/ast-engine.md?raw';
import subagentSwarmRaw from '../content/docs/engines/subagent-swarm.md?raw';
import verificationHarnessRaw from '../content/docs/engines/verification-harness.md?raw';
import dirichletCaseStudyRaw from '../content/docs/engines/dirichlet-case-study.md?raw';

import cliReferenceRaw from '../content/docs/reference/cli-reference.md?raw';
import lockfileSpecRaw from '../content/docs/reference/lockfile-spec.md?raw';
import mcpProtocolRaw from '../content/docs/reference/mcp-protocol.md?raw';
import complianceRaw from '../content/docs/reference/compliance.md?raw';

import { parseFrontmatter } from '../utils/frontmatter.ts';

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export interface DocItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  lastUpdated?: string;
  readTime?: string;
  author?: string;
  license?: string;
  content: string;
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
}

// Parse markdown frontmatter dynamically
const docIntro = parseFrontmatter(introductionRaw);
const docArchVision = parseFrontmatter(architectureVisionRaw);
const docQuickstart = parseFrontmatter(quickstartRaw);

const docUntypedSeams = parseFrontmatter(untypedSeamsRaw);
const docPanicResilience = parseFrontmatter(panicResilienceRaw);
const docBoundaryGraphs = parseFrontmatter(boundaryGraphsRaw);
const docChannelManifests = parseFrontmatter(channelManifestsRaw);
const docPolyRepoProtocol = parseFrontmatter(polyRepoProtocolRaw);
const docProjectionIsolation = parseFrontmatter(projectionIsolationRaw);
const docCiMcpGate = parseFrontmatter(ciMcpGateRaw);

const docAstEngine = parseFrontmatter(astEngineRaw);
const docSubagentSwarm = parseFrontmatter(subagentSwarmRaw);
const docVerificationHarness = parseFrontmatter(verificationHarnessRaw);
const docDirichletCaseStudy = parseFrontmatter(dirichletCaseStudyRaw);

const docCliReference = parseFrontmatter(cliReferenceRaw);
const docLockfileSpec = parseFrontmatter(lockfileSpecRaw);
const docMcpProtocol = parseFrontmatter(mcpProtocolRaw);
const docCompliance = parseFrontmatter(complianceRaw);

export const DOCS_TREE: DocCategory[] = [
  {
    id: 'getting-started',
    name: 'getting started',
    items: [
      {
        id: 'introduction',
        title: docIntro.data.title || '01. introduction & overview',
        slug: 'introduction',
        category: 'getting started',
        summary: docIntro.data.summary || 'overview of stokes as an autonomous cross-boundary systems invariant verification platform and multi-agent synthesis engine.',
        lastUpdated: docIntro.data.lastUpdated || 'last updated 1 day ago',
        readTime: docIntro.data.readTime || '4 min read',
        author: docIntro.data.author,
        license: docIntro.data.license,
        content: docIntro.content,
      },
      {
        id: 'architecture-vision',
        title: docArchVision.data.title || '02. architecture & vision',
        slug: 'architecture-vision',
        category: 'getting started',
        summary: docArchVision.data.summary || 'why modern cloud systems collapse at untyped compiler seams despite isolated single-language compiler passes.',
        lastUpdated: docArchVision.data.lastUpdated || 'last updated 1 day ago',
        readTime: docArchVision.data.readTime || '5 min read',
        author: docArchVision.data.author,
        license: docArchVision.data.license,
        content: docArchVision.content,
      },
      {
        id: 'quickstart',
        title: docQuickstart.data.title || '03. quickstart guide',
        slug: 'quickstart',
        category: 'getting started',
        summary: docQuickstart.data.summary || 'fast installation, contract scaffolding, strict CI verification, and local model context protocol (mcp) server launch.',
        lastUpdated: docQuickstart.data.lastUpdated || 'last updated 1 day ago',
        readTime: docQuickstart.data.readTime || '3 min read',
        author: docQuickstart.data.author,
        license: docQuickstart.data.license,
        content: docQuickstart.content,
      },
    ],
  },
  {
    id: 'architecture',
    name: 'core systems invariants',
    items: [
      {
        id: 'untyped-seams',
        title: docUntypedSeams.data.title || '01. untyped seams & context blindness',
        slug: 'untyped-seams',
        category: 'core systems invariants',
        summary: docUntypedSeams.data.summary || 'why monolingual linters suffer from context blindness across distributed database-to-proxy boundaries.',
        lastUpdated: docUntypedSeams.data.lastUpdated || 'last updated 1 day ago',
        readTime: docUntypedSeams.data.readTime || '6 min read',
        author: docUntypedSeams.data.author,
        license: docUntypedSeams.data.license,
        content: docUntypedSeams.content,
      },
      {
        id: 'panic-resilience',
        title: docPanicResilience.data.title || '02. panic vs. 100% error rate & resilience',
        slug: 'panic-resilience',
        category: 'core systems invariants',
        summary: docPanicResilience.data.summary || 'why replacing panics with match statements produces a 100% 502 blackout, and how two-tier bounded intake solves it.',
        lastUpdated: docPanicResilience.data.lastUpdated || 'last updated 1 day ago',
        readTime: docPanicResilience.data.readTime || '6 min read',
        author: docPanicResilience.data.author,
        license: docPanicResilience.data.license,
        content: docPanicResilience.content,
      },
      {
        id: 'boundary-graphs',
        title: docBoundaryGraphs.data.title || '03. boundary graphs vs. taint analysis',
        slug: 'boundary-graphs',
        category: 'core systems invariants',
        summary: docBoundaryGraphs.data.summary || 'sparse AST reachability graphs eliminate runtime overhead and false-positive CI blocks.',
        lastUpdated: docBoundaryGraphs.data.lastUpdated || 'last updated 1 day ago',
        readTime: docBoundaryGraphs.data.readTime || '5 min read',
        author: docBoundaryGraphs.data.author,
        license: docBoundaryGraphs.data.license,
        content: docBoundaryGraphs.content,
      },
      {
        id: 'channel-manifests',
        title: docChannelManifests.data.title || '04. channel binding & declarative manifests',
        slug: 'channel-manifests',
        category: 'core systems invariants',
        summary: docChannelManifests.data.summary || 'non-invasive contract adoption preserving native idiomatic types without intrusive protobuf/grpc rewrites.',
        lastUpdated: docChannelManifests.data.lastUpdated || 'last updated 1 day ago',
        readTime: docChannelManifests.data.readTime || '5 min read',
        author: docChannelManifests.data.author,
        license: docChannelManifests.data.license,
        content: docChannelManifests.content,
      },
      {
        id: 'poly-repo-protocol',
        title: docPolyRepoProtocol.data.title || '05. poly-repo sequence & ast extraction',
        slug: 'poly-repo-protocol',
        category: 'core systems invariants',
        summary: docPolyRepoProtocol.data.summary || 'downstream consumer expansion before upstream deployment prevents circular merge deadlocks.',
        lastUpdated: docPolyRepoProtocol.data.lastUpdated || 'last updated 1 day ago',
        readTime: docPolyRepoProtocol.data.readTime || '6 min read',
        author: docPolyRepoProtocol.data.author,
        license: docPolyRepoProtocol.data.license,
        content: docPolyRepoProtocol.content,
      },
      {
        id: 'projection-isolation',
        title: docProjectionIsolation.data.title || '06. projection consumption isolation',
        slug: 'projection-isolation',
        category: 'core systems invariants',
        summary: docProjectionIsolation.data.summary || 'strict projection filtering isolates unconsumed internal columns from triggering contract alerts.',
        lastUpdated: docProjectionIsolation.data.lastUpdated || 'last updated 1 day ago',
        readTime: docProjectionIsolation.data.readTime || '5 min read',
        author: docProjectionIsolation.data.author,
        license: docProjectionIsolation.data.license,
        content: docProjectionIsolation.content,
      },
      {
        id: 'ci-mcp-gate',
        title: docCiMcpGate.data.title || '07. deterministic ci gate & native mcp',
        slug: 'ci-mcp-gate',
        category: 'core systems invariants',
        summary: docCiMcpGate.data.summary || 'sub-38ms AST CI gate and native json-rpc model context protocol server for AI coding agents.',
        lastUpdated: docCiMcpGate.data.lastUpdated || 'last updated 1 day ago',
        readTime: docCiMcpGate.data.readTime || '5 min read',
        author: docCiMcpGate.data.author,
        license: docCiMcpGate.data.license,
        content: docCiMcpGate.content,
      },
    ],
  },
  {
    id: 'engines',
    name: 'engines & incident analysis',
    items: [
      {
        id: 'ast-engine',
        title: docAstEngine.data.title || 'multi-language ast analysis engine',
        slug: 'ast-engine',
        category: 'engines & incident analysis',
        summary: docAstEngine.data.summary || 'tree-sitter S-expression queries and fallback grammars across SQL, Protobuf, Python, and Rust.',
        lastUpdated: docAstEngine.data.lastUpdated || 'last updated 1 day ago',
        readTime: docAstEngine.data.readTime || '5 min read',
        author: docAstEngine.data.author,
        license: docAstEngine.data.license,
        content: docAstEngine.content,
      },
      {
        id: 'subagent-swarm',
        title: docSubagentSwarm.data.title || 'autonomous subagent actor swarm',
        slug: 'subagent-swarm',
        category: 'engines & incident analysis',
        summary: docSubagentSwarm.data.summary || 'dedicated language subagents with 4-byte big-endian IPC framing and 16.6ms render tick coalescing.',
        lastUpdated: docSubagentSwarm.data.lastUpdated || 'last updated 1 day ago',
        readTime: docSubagentSwarm.data.readTime || '6 min read',
        author: docSubagentSwarm.data.author,
        license: docSubagentSwarm.data.license,
        content: docSubagentSwarm.content,
      },
      {
        id: 'verification-harness',
        title: docVerificationHarness.data.title || 'fuzzing & simulation harness',
        slug: 'verification-harness',
        category: 'engines & incident analysis',
        summary: docVerificationHarness.data.summary || '10,000-case IEEE-754 float fuzzer, Criterion log parser, and RFC-2439 route flap simulator.',
        lastUpdated: docVerificationHarness.data.lastUpdated || 'last updated 1 day ago',
        readTime: docVerificationHarness.data.readTime || '6 min read',
        author: docVerificationHarness.data.author,
        license: docVerificationHarness.data.license,
        content: docVerificationHarness.content,
      },
      {
        id: 'dirichlet-case-study',
        title: docDirichletCaseStudy.data.title || 'dirichlet cloudflare outage reproduction',
        slug: 'dirichlet-case-study',
        category: 'engines & incident analysis',
        summary: docDirichletCaseStudy.data.summary || 'complete production-grade reproduction of the Cloudflare Nov 18, 2025 outage cascade and stokes verification.',
        lastUpdated: docDirichletCaseStudy.data.lastUpdated || 'last updated 1 day ago',
        readTime: docDirichletCaseStudy.data.readTime || '7 min read',
        author: docDirichletCaseStudy.data.author,
        license: docDirichletCaseStudy.data.license,
        content: docDirichletCaseStudy.content,
      },
    ],
  },
  {
    id: 'reference',
    name: 'systems reference',
    items: [
      {
        id: 'cli-reference',
        title: docCliReference.data.title || 'cli command & flag reference',
        slug: 'cli-reference',
        category: 'systems reference',
        summary: docCliReference.data.summary || 'complete documentation for stokes verify, codegen, mcp, diff, graph, init, scan, and remediate.',
        lastUpdated: docCliReference.data.lastUpdated || 'last updated 1 day ago',
        readTime: docCliReference.data.readTime || '8 min read',
        author: docCliReference.data.author,
        license: docCliReference.data.license,
        content: docCliReference.content,
      },
      {
        id: 'lockfile-spec',
        title: docLockfileSpec.data.title || 'stokes.lock schema & digest specification',
        slug: 'lockfile-spec',
        category: 'systems reference',
        summary: docLockfileSpec.data.summary || 'cryptographic AST normalization, schema serialization rules, and multi-repo conflict resolution.',
        lastUpdated: docLockfileSpec.data.lastUpdated || 'last updated 1 day ago',
        readTime: docLockfileSpec.data.readTime || '6 min read',
        author: docLockfileSpec.data.author,
        license: docLockfileSpec.data.license,
        content: docLockfileSpec.content,
      },
      {
        id: 'mcp-protocol',
        title: docMcpProtocol.data.title || 'model context protocol (mcp) specification',
        slug: 'mcp-protocol',
        category: 'systems reference',
        summary: docMcpProtocol.data.summary || 'stdio JSON-RPC 2.0 tool definitions, resource URIs, and prompt workflows for AI coding agents.',
        lastUpdated: docMcpProtocol.data.lastUpdated || 'last updated 1 day ago',
        readTime: docMcpProtocol.data.readTime || '6 min read',
        author: docMcpProtocol.data.author,
        license: docMcpProtocol.data.license,
        content: docMcpProtocol.content,
      },
      {
        id: 'compliance',
        title: docCompliance.data.title || 'compliance, attribution & hackathon ledger',
        slug: 'compliance',
        category: 'systems reference',
        summary: docCompliance.data.summary || 'formal organizer ruling documentation, pre-prepared asset disclosure, and IBM Bob token audit ledger.',
        lastUpdated: docCompliance.data.lastUpdated || 'last updated 1 day ago',
        readTime: docCompliance.data.readTime || '5 min read',
        author: docCompliance.data.author,
        license: docCompliance.data.license,
        content: docCompliance.content,
      },
    ],
  },
];

// Helper to flatten all docs into a single sequential list for pagination
export function flattenDocs(tree: DocCategory[]): DocItem[] {
  const flattened: DocItem[] = [];
  for (const cat of tree) {
    for (const item of cat.items) {
      flattened.push(item);
    }
  }
  return flattened;
}

// Helper to find doc by slug or id
export function findDocBySlug(slugOrId: string, tree: DocCategory[]): DocItem | null {
  const target = slugOrId.toLowerCase().trim();
  for (const cat of tree) {
    for (const item of cat.items) {
      if (item.slug.toLowerCase() === target || item.id.toLowerCase() === target) {
        return item;
      }
    }
  }
  return null;
}
